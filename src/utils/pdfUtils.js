import { jsPDF } from 'jspdf';

export function generateOrderPDF(title, order) {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text(title, 20, 20);
  
  // Add order text
  doc.setFontSize(12);
  const splitText = doc.splitTextToSize(order, 170); // Wrap text at 170 points
  doc.text(splitText, 20, 40);
  
  // Save the PDF
  doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}-order.pdf`);
}