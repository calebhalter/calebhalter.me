export async function  api_query (component, method="GET", data=null) {
  var request = {
    method: method,
  }
  if (data !== null) {
    request.headers= {
      'Content-Type': 'application/json',
    },
    request["body"] = JSON.stringify(data)
  }
  const value = await fetch(`api/components/${component}`, request);
  return value.json();
}