export async function onRequest(context) {
  const { request } = context;

  // 1. Handle CORS Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // 2. Extract target URL from query parameter ?url=
  const reqUrl = new URL(request.url);
  let targetUrlStr = reqUrl.searchParams.get("url");

  if (!targetUrlStr) {
    return new Response(
      JSON.stringify({ status: "active", endpoint: "Cloudflare Pages Proxy Function" }),
      { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    );
  }

  if (!targetUrlStr.startsWith("http://") && !targetUrlStr.startsWith("https://")) {
    targetUrlStr = "https://" + targetUrlStr;
  }

  try {
    const targetUrl = new URL(targetUrlStr);

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set("Host", targetUrl.host);
    modifiedHeaders.delete("cf-connecting-ip");
    modifiedHeaders.delete("cf-ray");

    const fetchOpts = {
      method: request.method,
      headers: modifiedHeaders,
      redirect: "follow",
    };

    if (!["GET", "HEAD"].includes(request.method)) {
      fetchOpts.body = await request.arrayBuffer();
    }

    const response = await fetch(targetUrl.href, fetchOpts);

    const responseHeaders = new Headers(response.headers);
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD");
    responseHeaders.set("Access-Control-Allow-Headers", "*");
    
    // Strip iframe blocking headers
    responseHeaders.delete("X-Frame-Options");
    responseHeaders.delete("Content-Security-Policy");
    responseHeaders.delete("Content-Security-Policy-Report-Only");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Pages Proxy Error", message: err.message }),
      { status: 502, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    );
  }
}
