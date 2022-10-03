import request from "../request";

export function getTreeList(params: any) {
  return request({
    url: "/portal/getTreeList",
    method: "get",
    params,
  });
}
