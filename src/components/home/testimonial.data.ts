import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Great Quality!',
    content:
      'We have ordered custom printed tshirts from Grooso and we are very happy with the quality and service. They are very responsive and quick to answer any questions we had. The shirts are very soft and comfortable. We will definitely be ordering from them again!',
    user: {
      id: 1,
      name: 'Shaik Basha',
      professional: 'NSS Club Member',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Exceptional Quality and Timely Delivery!',
    content:
      'As a busy professional, I appreciate the convenience of online shopping, but quality and delivery speed matter to me. Grooso Store exceeded my expectations. The products I received were of exceptional quality, and they arrived faster than I anticipated. Plus, their user-friendly app made the entire process a breeze. I highly recommend Grooso Store to anyone seeking top-notch products and reliable service.',
    user: {
      id: 1,
      name: 'Rushi',
      professional: 'Business Professional',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'The Ultimate Shopping Destination!',
    content:
      "Grooso Store is the ultimate shopping destination for tech-savvy individuals like me. Their app is intuitive, making it easy to navigate and find the products I need. What's more, their products are not only stylish but also durable. I've purchased electronics and gadgets from them, and they have consistently met or exceeded my expectations. If you want quality and convenience, look no further than Grooso Store",
    user: {
      id: 1,
      name: 'Varun Guttula',
      professional: 'Teacher',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Good products!',
    content:
      "Grooso Store is a fashionista's paradise! Their collection of trendy clothing and accessories is simply outstanding. I've been a regular customer, and each time I'm delighted with my purchases.",
    user: {
      id: 1,
      name: 'Sai Kumar',
      professional: 'Student',
      photo: '4.jpg',
    },
  },
]
