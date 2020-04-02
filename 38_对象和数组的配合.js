var arr = [
    {
        'id':01,
        'title':'全球疫情',
        'conment':'命运共同体'
    },
    {
        'id':02,
        'title' : '春分节气',
        'conment':'武汉樱花节'
    },
    {
        'id':03,
        'title':'31省市新增39例',
        'conment':[
            {
                'province':'武汉',
                'newadd':'0例',
                'newzhiyu':'624例',
                'newdie':'2例'
            },
            {
                'province':'广东',
                'newadd':'8例',
                'newzhiyu':'0例',
                'newdie':'0例'
            },
        ]
    },
];

console.log(arr[2].conment[1].province);
