import { display } from "./main.js";

/*
    In this module, the API is fetched. This is to focus on function and display in the other module.
*/

const API_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true';

export async function getGoals() {
    try {
    const response = await fetch(API_URL);
    const result = await response.json();
    result.forEach(display);
    return result;
    } catch (error) {
        console.log('ERROR: ', error);
    }
}
