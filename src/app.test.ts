import { hospitalFetch } from './utils/fetchORM';
require('dotenv').config();

describe('GET /api/patients/1', () => {
  describe('Get Patient', () => {
    test('Patient was gotten', async () => {
      const hospitalFetchMock = jest.fn();
      let patient = hospitalFetchMock('');
      patient = hospitalFetch({
        method: 'GET',
        endpoint: 'https://hospital-digital-intantil/api/patients/1',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(patient).toEqual({
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
      });
    });
  });
});

describe('GET /api/patients/1111', () => {
  describe('Get Patient', () => {
    test('Patient was not found', async () => {
      const hospitalFetchMock = jest.fn();
      let patient = hospitalFetchMock('');
      patient = hospitalFetch({
        method: 'GET',
        endpoint: 'https://hospital-digital-intantil/api/patients/1111',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(patient).toEqual({
        msg: 'Patient not found',
      });
    });
  });
});

describe('GET /api/patients', () => {
  describe('Get all patients', () => {
    test('All patients gotten', async () => {
      const hospitalFetchMock = jest.fn();
      let patients = hospitalFetchMock('');
      patients = hospitalFetch({
        method: 'GET',
        endpoint: 'https://hospital-digital-intantil/api/patients',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(patients).toEqual({
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
      });
    });
  });
});

describe('POST /api/patients', () => {
  describe('Create patient', () => {
    test('Patient was created', async () => {
      const patient = {
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

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock('');
      result = hospitalFetch({
        method: 'POST',
        body: patient,
        endpoint: 'https://hospital-digital-intantil/api/patients',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
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
      });
    });
  });
});

describe('POST /api/patients', () => {
  describe('Create patient', () => {
    test('Patient age exceds maximum', async () => {
      const patient = {
        first_name: 'Eyder',
        last_name: 'Concha',
        age: 101,
        sex: 'Male',
        birth_date: '2021-11-22',
        city_name: 'Mérida',
        hospital_name: 'IMSS',
        guardian_name: 'Rafael Canto',
        guardian_phone: '9991864648',
      };

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock('');
      result = hospitalFetch({
        method: 'POST',
        body: patient,
        endpoint: 'https://hospital-digital-intantil/api/patients',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
        msg: 'Please enter valid data',
        errors: '***',
      });
    });
  });
});

describe('PUT /api/patients/1', () => {
  describe('Update patient', () => {
    test('Patient updated', async () => {
      const patient = {
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

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock({
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
      });
      result = hospitalFetch({
        method: 'PUT',
        body: patient,
        endpoint: 'https://hospital-digital-intantil/api/patients/1',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
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
      });
    });
  });
});

describe('PUT /api/patients/1111', () => {
  describe('Update patient', () => {
    test('Patient not found', async () => {
      const patient = {
        id: 1111,
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

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock({
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
      });
      result = hospitalFetch({
        method: 'PUT',
        body: patient,
        endpoint: 'https://hospital-digital-intantil/api/patients/1111',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
        msg: 'Patient not found',
      });
    });
  });
});

describe('DELETE /api/patients/1', () => {
  describe('Delete patient', () => {
    test('Patient was deleted', async () => {
      const patientId = {
        id: 1,
      };

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock({
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
      });
      result = hospitalFetch({
        method: 'DELETE',
        body: patientId,
        endpoint: 'https://hospital-digital-intantil/api/patients/1',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
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
      });
    });
  });
});

describe('DELETE /api/patients/1111', () => {
  describe('Delete patient', () => {
    test('Patient deleted not found', async () => {
      const patientId = {
        id: 1111,
      };

      const hospitalFetchMock = jest.fn();
      let result = hospitalFetchMock({
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
      });
      result = hospitalFetch({
        method: 'DELETE',
        body: patientId,
        endpoint: 'https://hospital-digital-intantil/api/patients/1111',
      });

      expect(hospitalFetchMock).toBeCalledTimes(1);
      expect(result).toEqual({
        msg: 'Patient not found',
      });
    });
  });
});
