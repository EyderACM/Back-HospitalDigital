export const hospitalFetch = (entry: any) => {
  if (
    entry.method === 'GET' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1'
  ) {
    return {
      id: 1,
      first_name: 'Eyder',
      last_name: 'Concha',
      age: 21,
      sex: 'Male',
      birth_date: '2021-11-22',
      city_name: 'Mérida',
      hospital_name: 'IMSS',
      guardian_name: 'Rafael Canto',
      guardian_phone: '9991864648',
    };
  }

  if (
    entry.method === 'GET' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1111'
  ) {
    return {
      msg: 'Patient not found',
    };
  }

  if (
    entry.method === 'GET' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients'
  ) {
    return {
      patients: [
        {
          id: 1,
          first_name: 'Eyder',
          last_name: 'Concha',
          age: 21,
          sex: 'Male',
          birth_date: '2021-11-22',
          city_name: 'Mérida',
          hospital_name: 'IMSS',
          guardian_name: 'Rafael Canto',
          guardian_phone: '9991864648',
        },
      ],
    };
  }

  if (
    entry.method === 'POST' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients' &&
    entry.body.age === 21
  ) {
    return {
      id: 1,
      first_name: 'Eyder',
      last_name: 'Concha',
      age: 21,
      sex: 'Male',
      birth_date: '2021-11-22',
      city_name: 'Mérida',
      hospital_name: 'IMSS',
      guardian_name: 'Rafael Canto',
      guardian_phone: '9991864648',
    };
  }

  if (
    entry.method === 'POST' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients' &&
    entry.body.age === 101
  ) {
    return {
      msg: 'Please enter valid data',
      errors: '***',
    };
  }

  if (
    entry.method === 'PUT' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1'
  ) {
    return {
      id: 1,
      first_name: 'Eyder',
      last_name: 'Concha',
      age: 22,
      sex: 'Male',
      birth_date: '2021-11-22',
      city_name: 'Mérida',
      hospital_name: 'IMSS',
      guardian_name: 'Rafael Canto',
      guardian_phone: '9991864648',
    };
  }

  if (
    entry.method === 'PUT' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1111'
  ) {
    return {
      msg: 'Patient not found',
    };
  }

  if (
    entry.method === 'DELETE' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1'
  ) {
    return {
      id: 1,
      first_name: 'Eyder',
      last_name: 'Concha',
      age: 22,
      sex: 'Male',
      birth_date: '2021-11-22',
      city_name: 'Mérida',
      hospital_name: 'IMSS',
      guardian_name: 'Rafael Canto',
      guardian_phone: '9991864648',
    };
  }

  if (
    entry.method === 'DELETE' &&
    entry.endpoint === 'https://hospital-digital-intantil/api/patients/1111'
  ) {
    return {
      msg: 'Patient not found',
    };
  }
};
