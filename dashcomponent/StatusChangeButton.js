"use client"

import React, { useState, useEffect } from 'react';

function StatusChangeButton({ id, email }) {
  const [status, setStatus] = useState('Pending'); // Set the default status to "Pending"
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')

  
  useEffect(() => {
    const initialStatus = localStorage.getItem(`status-${id}`);
    if (initialStatus) {
      setStatus(initialStatus);
    }
  }, [id]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'green';
      case 'rejected':
        return 'red';
      case 'Pending':
        return 'orange'; // Set the color for "Pending" to "orange"
      default:
        return 'gray';
    }
  };
 
  const handleChange = async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    localStorage.setItem(`status-${id}`, newStatus);


    const approvedMessage = "Your reservation has been approved.";
    const rejectedMessage = "Sorry, your reservation has been rejected.";

 // Set the message content based on the new status
 const newMessage = newStatus === 'approved' ? approvedMessage : (newStatus === 'rejected' ? rejectedMessage : '');

 // Update the message state with the new message content
 setMessage(newMessage);


    if (newStatus === 'approved') {
      setMessage(approvedMessage);
    } else if (newStatus === 'rejected') {
      setMessage(rejectedMessage);
    } else {
      setMessage(''); // Clear the message if status is not "approved" or "rejected"
    } // Store the status in localStorage
    if (newStatus !== "") {
      try {
        const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app';
        const res = await fetch(`${apiUrl}/api/reserve/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to update reservation status");
        }
        // Show an alert to the user
        if (res.ok) {
          // Show an alert for successful status update
          window.alert('Status updated successfully!');
  
          // Send an email when the status changes to "approved" or "rejected"
          if (newStatus === 'approved' || newStatus === 'rejected') {
            const emailResponse = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                subject,
                message: newMessage, // Use the dynamically generated message
                to: email, // Use the recipient's email address
              }),
            });
  
            if (emailResponse.ok) {
              console.log('Email sent successfully!');
            } else {
              console.error('Failed to send the email');
            }
          }
        } else {
          throw new Error('Failed to update reservation status');
        }
      } catch (error) {
        console.error('Error updating reservation status:', error);
      }
    }
  };

  const circleStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '8px',
    backgroundColor: getStatusColor(status),
  };

  return (
    <div>
      <div style={circleStyle}></div>
      <select value={status} onChange={handleChange}>
        <option value="Pending" disabled>Pending</option> {/* Set the default value to "Pending" */}
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}

export default StatusChangeButton;