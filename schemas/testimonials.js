export default{
    name: 'testimonials',
    type:'document',
    title: 'Testimonials',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Author',
        },
        {
            name:'image',
            type:'image',
            title:'Image ',
        },
        {
            name:'position',
            type:'string',
            title:'Author position',
        },
        {
            name:'testimonial',
            type:'string',
            title:'Testimonial',
        },
    ] 
}