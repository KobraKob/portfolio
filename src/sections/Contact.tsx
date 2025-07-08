import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck, FiCopy, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('balavanthko@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simulate form processing
    setTimeout(() => {
      // Create mailto link with pre-filled data
      const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
      const body = encodeURIComponent(`Hi Balavanth,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`);
      const mailtoLink = `mailto:balavanthko@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsLoading(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins"
        >
          Get In Touch
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 font-poppins flex items-center gap-2">
                <FiMail className="text-blue-400" />
                Contact Information
              </h3>
              <p className="mb-8 font-inter text-gray-300">
                I'm currently available for freelance work. Feel free to reach out for project inquiries or just to say hello!
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={copyEmail}
                >
                  <FiMail className="text-blue-400" size={24} />
                  <div className="flex-1">
                    <span className="block">balavanthko@gmail.com</span>
                    <span className="text-sm text-gray-400">Click to copy</span>
                  </div>
                  {emailCopied ? (
                    <FiCheck className="text-green-400" size={20} />
                  ) : (
                    <FiCopy className="text-gray-400" size={20} />
                  )}
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FiLinkedin className="text-blue-400" size={24} />
                  <div className="flex-1">
                    <a href="www.linkedin.com/in/balavanth" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                      linkedin.com/in/balavanth
                    </a>
                    <span className="text-sm text-gray-400">Let's connect</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FiGithub className="text-blue-400" size={24} />
                  <div className="flex-1">
                    <a href="https://github.com/KobraKob" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                      github.com/balavanth
                    </a>
                    <span className="text-sm text-gray-400">View my projects</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <FiMapPin className="text-blue-400" size={24} />
                  <div className="flex-1">
                    <span className="block">Bengaluru, Karnataka, India</span>
                    <span className="text-sm text-gray-400">Available for remote work</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 font-poppins flex items-center gap-2">
                <FiSend className="text-blue-400" />
                Send Message
              </h3>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900 border border-green-600 rounded-lg flex items-center gap-2"
                >
                  <FiCheck className="text-green-400" />
                  <span className="text-green-400">Message prepared! Your email client should open shortly.</span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Preparing...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                <p className="text-sm text-gray-400 text-center">
                  This will open your default email client with a pre-filled message
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};