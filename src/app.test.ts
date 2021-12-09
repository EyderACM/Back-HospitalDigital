import { patientList } from "./utils/patient";
import {
  hospitalFetchStatus,
  hospitalFetch,
  hospitalEditFetch,
  hospitalDeleteFetch,
  hospitalDeleteFetchStatus,
} from "./utils/fetchORM";
require("dotenv").config();

describe("GET /api/patients/1", () => {
  describe("Get Patient", () => {
    test("Patient was gotten", async () => {
      const patient = hospitalFetch(patientList[0]);
      const patientId = patient.id;
      expect(patientId).toBe(1);
    });
  });
});

describe("GET /api/patients/1111", () => {
  describe("Get Patient", () => {
    test("Patient was not found", async () => {
      const patient = hospitalFetch(patientList[1110]);
      expect(patient).toBe(undefined);
    });
  });
});

describe("GET /api/patients", () => {
  describe("Get all patients", () => {
    test("All patients gotten", async () => {
      const patients = hospitalFetch(patientList);
      expect(Array.isArray(patients)).toBe(true);
    });
  });
});

describe("POST /api/patients", () => {
  describe("Create patient", () => {
    test("Patient was created", async () => {
      const { patient } = hospitalFetch({
        patient: { name: "José", age: "20" },
        method: "POST",
      });
      expect(patient.name).toBe("José");
    });
  });
});

describe("POST /api/patients", () => {
  describe("Create patient", () => {
    test("Patient age exceds maximum", async () => {
      const { message } = hospitalFetchStatus({
        patient: { name: "José", age: "200" },
        method: "POST",
      });
      expect(message).toBe("Patient age exceds maximum");
    });
  });
});

describe("PUT /api/patients/1", () => {
  describe("Update patient", () => {
    test("Patient updated", async () => {
      const { patient } = hospitalFetch({
        patient: { id: 1, name: "Mario", age: "30" },
        method: "PUT",
      });
      expect(patient.name).toBe("Mario");
    });
  });
});

describe("PUT /api/patients/1111", () => {
  describe("Update patient", () => {
    test("Patient not found", async () => {
      const { message } = hospitalEditFetch({
        patient: { id: 1, name: "Mario", age: "30" },
        method: "PUT",
      });
      expect(message).toBe("Patient not found");
    });
  });
});

describe("DELETE /api/patients/1", () => {
  describe("Delete patient", () => {
    test("Patient was deleted", async () => {
      const { message } = hospitalDeleteFetch(1);
      expect(message).toBe("Patient was deleted");
    });
  });
});

describe("DELETE /api/patients/1111", () => {
  describe("Delete patient", () => {
    test("Patient deleted not found", async () => {
      const { message } = hospitalDeleteFetchStatus(1111);
      expect(message).toBe("Patient deleted not found");
    });
  });
});
