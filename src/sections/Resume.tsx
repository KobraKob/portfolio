import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

export const Resume = () => {
  const handleDownload = () => {
    // Replace with actual resume URL
    const resumeUrl = '/balavanth_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Balavanth_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('/balavanth_resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
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
          Resume
        </motion.h2>
        
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            {/* Resume Card */}
            <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-2xl border border-gray-600 hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Resume</h3>
                      <p className="text-gray-300 text-sm">Balavanth K O - Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                      Latest Version
                    </span>
                  </div>
                </div>
              </div>
              
              {/* PDF Preview Area */}
              <div className="relative">
                <div className="h-96 w-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center relative overflow-hidden">
                  {/* Document Icon Background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <FileText className="w-32 h-32 text-white" />
                  </div>
                  
                  {/* Preview Content */}
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Resume Preview</h4>
                    <p className="text-gray-300 mb-4">Click to view or download my resume</p>
                    
                    {/* Quick Stats */}
                    <div className="flex justify-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">PDF</div>
                        <div className="text-gray-400">Format</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">2024</div>
                        <div className="text-gray-400">Updated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">2MB</div>
                        <div className="text-gray-400">Size</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-10 transition-opacity duration-300 cursor-pointer" onClick={handleView} />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-6 bg-gray-700 border-t border-gray-600">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleView}
                    className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Eye className="w-4 h-4" />
                    View Resume
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    className="flex-1 sm:flex-none px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-gray-500 hover:border-gray-400"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </div>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};