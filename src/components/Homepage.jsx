import React from 'react';
import Nav from './Nav';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a brief description of Product 1.',
    imageUrl: 'https://via.placeholder.com/300x300',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a brief description of Product 2.',
    imageUrl: 'https://via.placeholder.com/300x300',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a brief description of Product 3.',
    imageUrl: 'https://via.placeholder.com/300x300',
  },
  // Add more products as needed
];

export const Homepage = () => {
  return (
    <>
      <Nav />

      <div>
        {/* Hero Section */}
        <motion.section
          className="bg-[#FFCDEA] py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl font-bold text-[#86469C]"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Welcome to Our Store
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-[#BC7FCD]"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Discover our exclusive collection of products that bring style and elegance to your life.
          </motion.p>
        </motion.section>

        {/* Slideshow Section */}
        <motion.section
          className="my-10 mx-auto max-w-6xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="w-full h-64 bg-[#FB9AD1] rounded-lg overflow-hidden shadow-lg">
            <motion.img
              src="https://via.placeholder.com/1200x400" // Placeholder for slideshow image
              alt="Slideshow"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.section>

        {/* Products Introduction Section */}
        <motion.section
          id="products"
          className="py-20 bg-[#FFCDEA]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            className="container mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-[#86469C]">Our Products</h2>
            <p className="mt-2 text-lg text-[#BC7FCD]">
              Explore our range of unique and stylish items.
            </p>
          </motion.div>

          <div className="relative m-4 mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-lg group-hover:opacity-50 transition duration-300 ease-in-out"></div>
                <motion.img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-2xl font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-white">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};
