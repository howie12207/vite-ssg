// 取目標元素內最到高度，同步至其餘元素
const setSameHeight = target => {
    const elementList = document.querySelectorAll(target);
    const heightList = Array.from(elementList).map(item => item.offsetHeight);
    const maxHeight = Math.max(...heightList);
    elementList.forEach(element => {
        element.style.height = `${maxHeight}px`;
    });
};

// 取得Query 轉成物件
const fetchQuery = () => {
    const queryObj = {};
    const query = window.location.search.substring(1);
    const queryList = query.split('&');
    queryList.forEach(item => {
        const ary = item.split('=');
        queryObj[ary[0]] = ary[1];
    });
    return queryObj;
};

export { setSameHeight, fetchQuery };
