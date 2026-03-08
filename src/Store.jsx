import React from 'react'


const Store = () => {
  return (
    <div>


      <div style={{ textAlign: "center", margin: "40px 0" }}>
  
      <div className="shopimg"><img src="https://obsessioncosmetics.com/wp-content/uploads/2024/04/store.jpeg" alt="shop image" width={1000} height={500} /></div>
              <h2 className='shoph'>Our Store Location </h2>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113050.56999885383!2d85.336087!3d27.691639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dd3a38411b%3A0x23bcad52bf259614!2sObsession%20Cosmetics%20Baneshwor!5e0!3m2!1sen!2snp!4v1772455481367!5m2!1sen!2snp" 
          width="60%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        ></iframe>
      </div>


    </div>
  )
}

export default Store

{/* Step 1: Google Maps bata location copy gara
Go to 👉 https://maps.google.com
Search gara: “Newroad Kathmandu” (example)
Click Share
Click Embed a map
Copy <iframe> code
Example: 
<iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d879.0196867389874!2d84.02041792853375!3d28.204919998487547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDEyJzE3LjciTiA4NMKwMDEnMTUuOCJF!5e0!3m2!1sen!2snp!4v1772444741913!5m2!1sen!2snp"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        ></iframe>
*/}