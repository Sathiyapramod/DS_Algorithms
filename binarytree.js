let foo = (tree)=> {
    const [name,children] = tree;
    // console.log(children);
    if(!children)
    return;
    return children.map(foo);

}

const tree = ['A',[['B',[['E'],['F']]],['C',[['G'],['H']]],['D']]];

console.log(foo(tree));