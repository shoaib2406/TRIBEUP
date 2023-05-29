import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async (email, password) => {
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/user/sign_in',
      {
        username: email.toLowerCase(),
        password: password,
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
  }
};

export const signUpService = async (
  name,
  userName,
  email,
  password,
  confirmPassword
) => {
  console.log(name, userName, email, password, confirmPassword);
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/user/sign_up',
      {
        name: name,
        username: email.toLowerCase(email),
        email: email.toLowerCase(email),
        password: password,
        password2: confirmPassword,
      }
    );
  } catch (error) {
    return error;
  }
};

export const getCarData = async () => {
  try {
    return await axios.get(
      `https://transaction1122.herokuapp.com/booking/data`,
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const getWishListData = async () => {
  console.log(`Token ${await AsyncStorage.getItem('tokken')}`);
  try {
    return await axios.get(
      ` https://transaction1122.herokuapp.com/wish_list_booking/data`,
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const bookingSeatWishList = async (
  block,
  seat,
  car_number,
  date,
  endDate
) => {
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/wish_list_booking/seats',
      {
        block: `Block${block}`,
        seat: seat,
        booked: 'True',
        car_number: car_number,
        from_date_time: date,
        end_date_time: endDate,
      },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('kjbhiuhaojdsnjbciuoasfjnasub', errr);
  }
};

export const bookingSeat = async (block, seat, car_number, date, endDate) => {
  console.log(block, seat, car_number, date, endDate);
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/booking/seats',
      {
        block: `Block${block}`,
        seat: seat,
        booked: 'True',
        car_number: car_number,
        from_date_time: date,
        end_date_time: endDate,
      },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('kjbhiuhaojdsnjbciuoasfjnasub', errr);
  }
};

export const resetService = async (current_password, new_password) => {
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/user/reset_password',
      {
        current_password,
        new_password,
        again_new_password: new_password,
      },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
  }
};

export const EditService = async (email) => {
  try {
    return await axios.put(
      'https://transaction1122.herokuapp.com/user/edit_profile',
      {
        email,
      },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};

export const dropCarData = async () => {
  try {
    return await axios.get('https://transaction1122.herokuapp.com/dropcar', {
      headers: {
        Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
      },
    });
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};

export const dropSlotCar = async (data) => {
  console.log('hbivusoaidna', data);
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/dropcarpost',
      { id: data },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};

export const getCarTime = async () => {
  try {
    return await axios.get('https://transaction1122.herokuapp.com/changetime', {
      headers: {
        Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
      },
    });
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};

export const updateCarTime = async (id, startData, endDate) => {
  console.log('hbivusoaidna', id, startData, endDate);
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/changetimepost',
      { id: id, from_date_time: startData, end_date_time: endDate },
      {
        headers: {
          Authorization: `Token ${await AsyncStorage.getItem('tokken')}`,
        },
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};

export const isUserName = async (username) => {
  try {
    return await axios.post(
      'https://transaction1122.herokuapp.com/user/check_user',
      { username }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};
export const getForgetPassword = async (username, password) => {
  console.log('kabukslidknlasnkdlas', username, password);
  try {
    return await axios.put(
      'https://transaction1122.herokuapp.com/user/forget_password',
      {
        username: username.toLowerCase(),
        password,
      }
    );
  } catch (error) {
    const errr = JSON.stringify(error);
    console.log('error', errr);
    return error;
  }
};
