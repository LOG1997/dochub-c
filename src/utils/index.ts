export function transTree(list: []) {
  const treeData: object[] = [];

  list.forEach((item: any) => {
    // 给每一项添加子节点
    // item.children = []

    // 如果 pid 为空，说明是最顶级，直接放到 treeData 中即可
    if (!item.parentId) {
      treeData.push(item);
    }

    // 根据前面的分析，pid 代表的是父级的 id，从而可以进行筛选子级
    const children = list.filter((data: any) => data.parentId === item.id);

    if (!children.length) return;

    // 将返回的子级进行赋值给父级的 children
    item.children = children;
  });

  return treeData;
}
