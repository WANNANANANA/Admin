import Mock from 'mockjs';

Mock.mock('http://localhost:8888/login', 'POST', {
    data: {
        'token': '43339374788'
    }
})

Mock.mock('http://localhost:8888/user', {
    data: {
        "name": '@name',
        'email': '@email',
        'age|1-10': 5
    }
})

Mock.mock('http://localhost:8888/menu', {
    data: {
        "id": '@increment',
        "name": 'menu',
        "order|10-20": 12 // 生成规则的含义需要依赖回属性值类型才能确定 这里得12只是用来确定order类型
    }
})