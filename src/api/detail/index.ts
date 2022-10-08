import request from "../request";

export function getTreeList(params: any) {
  return request({
    url: "/portal/getTreeList",
    method: "get",
    params,
  });
}

export function getVersionList(params: any) {
  return request({
    url: "/portal/getVersionList",
    method: "get",
    params,
  });
}

export function getContent(params: any) {
  return request({
    url: "/portal/getContent",
    method: "get",
    params,
  });
}
