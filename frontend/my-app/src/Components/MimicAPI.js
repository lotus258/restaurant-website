 // This part is from online shared document as the API link is down.
    // Here is the resource link. https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view
    // Start here with some modification on time
    import axios from 'axios';

    const availableTimesByDate = {
        '2024-04-01': ['10:00', '11:00', '12:00'],
        '2024-04-02': ['10:00', '11:00', '12:00'],
        '2024-04-03': ['14:00', '15:00', '16:00'],
        '2024-04-04': ['10:00', '11:00', '12:00'],
        '2024-04-05': ['14:00', '15:00', '16:00'],
        '2024-04-06': ['10:00', '11:00', '12:00'],
        '2024-04-07': ['14:00', '15:00', '16:00'],
        '2024-04-08': ['10:00', '11:00', '12:00'],
        '2024-04-09': ['14:00', '15:00', '16:00'],
        '2024-04-10': ['10:00', '11:00', '12:00'],
        '2024-04-11': ['14:00', '15:00', '16:00'],
        '2024-04-12': ['10:00', '11:00', '12:00'],
        '2024-04-13': ['14:00', '15:00', '16:00'],
        '2024-04-14': ['10:00', '11:00', '12:00'],
        '2024-04-15': ['14:00', '15:00', '16:00'],
        '2024-04-16': ['10:00', '11:00', '12:00'],
        '2024-04-17': ['14:00', '15:00', '16:00'],
        '2024-04-18': ['10:00', '11:00', '12:00'],
        '2024-04-19': ['14:00', '15:00', '16:00'],
        '2024-04-20': ['10:00', '11:00', '12:00'],
        '2024-04-21': ['14:00', '15:00', '16:00'],
        '2024-04-22': ['14:00', '15:00', '16:00'],
        '2024-04-23': ['14:00', '15:00', '16:00'],
        '2024-04-24': ['14:00', '15:00', '16:00'],
        '2024-04-25': ['14:00', '15:00', '16:00'],
        '2024-04-26': ['14:00', '15:00', '16:00'],
        '2024-04-27': ['14:00', '15:00', '16:00'],
        '2024-04-28': ['14:00', '15:00', '16:00'],
        '2024-04-29': ['14:00', '15:00', '16:00'],
        '2024-04-30': ['14:00', '15:00', '16:00'],
      };


      const fetchAPI = (date) => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(availableTimesByDate[date]){
                    resolve(availableTimesByDate[date])
                }
                else{
                    reject(new Error('No available times for the selected date.'));
                }
            } , 1000)
        })
      }

      const submitAPI = (formData) => {
        availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (formData) {
              resolve(true); // Simulate successful submission
            } else {
              reject(new Error('Form submission failed.'));
            }
          }, 1000); // Simulate API delay
        });
      };
    // End here

    export {submitAPI, fetchAPI};