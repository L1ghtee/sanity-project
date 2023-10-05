export default{
    name: 'works',
    type:'document',
    title: 'Recent works',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name',
        },
        {
            name:'image',
            type:'image',
            title:'Image',
        },
        {
            name:'description',
            type:'string',
            title:'Description',
        },
        {
            name:'tags',
            type:'array',
            title:'Tags',
            of:[{type:'string'}]
        },
    ]
}