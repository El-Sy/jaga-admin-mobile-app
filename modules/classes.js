export function patient(patient) {
    this.patient_id = patient.id
    this.patient_first_name = patient.first_name ===  null ? "": patient.first_name
    this.patient_last_name = patient.last_name ===  null ? "" : patient.last_name
    this.patient_name = this.patient_first_name + " " + this.patient_last_name
    this.gender = patient.gender
    this.age = patient.age
    this.description = patient.description
    this.languages = patient.languages
    this.primary_diagnosis = patient.medical.primary_diagnosis
    this.created_at = patient.created_at;
    this.created_at_search = Moment(patient.created_at).fromNow();
    this.national_id = patient.national_id;
}