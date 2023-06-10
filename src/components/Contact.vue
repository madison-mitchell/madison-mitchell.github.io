<template>
    <div id="contact-container" class="container mb-20 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <div class="contact m-auto isolate sm:p-10 lg:p-16">
            <div class="max-w-2xl">
                <div class="flex">
                    <div class="inline-block w-1.5 h-10 bg-sky-500 mr-4"></div>
                    <h2 class="text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-3xl">Get in Touch</h2>
                </div>
                <p class="text-left mt-2 text-lg leading-8 text-gray-600">Level up your software game. Reach out and let's
                    make it happen!</p>
            </div>
            <form @submit="submitForm" class="bg-white drop-shadow-md rounded-xl mx-auto mt-16 max-w-xl sm:mt-20 p-10">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-lg font-semibold leading-6 text-gray-900">First Name</label>
                        <div class="mt-2.5">
                            <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-lg font-semibold leading-6 text-gray-900">Last Name</label>
                        <div class="mt-2.5">
                            <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="company" class="block text-lg font-semibold leading-6 text-gray-900">Company</label>
                        <div class="mt-2.5">
                            <input v-model="formData.company" type="text" name="company" id="company" autocomplete="organization"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-lg font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                            <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-lg font-semibold leading-6 text-gray-900">Phone Number</label>
                        <div class="relative mt-2.5">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="country" class="sr-only">Country</label>
                                <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 appearance-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" />
                            </div>
                            <input v-model="formData.phoneNumber" type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                class="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-lg font-semibold leading-6 text-gray-900">Message</label>
                        <div class="mt-2.5">
                            <textarea v-model="formData.message" name="message" id="message" rows="4"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button type="submit" :disabled="isButtonDisabled" :class="{ 'bg-neutral-500': isButtonDisabled, 'bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-blue-500 hover:bg-indigo-500 hover:to-blue-600': !isButtonDisabled }" class="block w-full rounded-md px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's
                        talk</button>
                </div>
                <div v-if="showSuccessMessage" class="text-green-600 mt-4">
                    Email sent successfully!
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const agreed = ref(false);

export default {
    name: 'Contact',
    components: {
        ChevronDownIcon,
    },
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                country: '',
                phoneNumber: '',
                message: '',
            },
            showSuccessMessage: false,
            isButtonDisabled: false,
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();

            this.isButtonDisabled = true;

            // Format the form data for email
            const formattedData = {
                firstName: this.formData.firstName,
                lastName: this.formData.lastName,
                email: this.formData.email,
                company: this.formData.company,
                country: this.formData.country,
                phoneNumber: this.formData.phoneNumber,
                message: this.formData.message
                // Add other form fields as needed
            };

            // Send the formatted data via email (replace with your email sending logic)
            this.sendEmail(formattedData)
                .then(() => {
                    this.showSuccessMessage = true;
                    // Reset the form after successful submission
                    this.resetForm();
                })
                .catch((error) => {
                    // Handle any errors that occur during email sending
                    console.error(error);
                    console.error('Error sending email: ', error);
                        })
                .finally(() => {
                    // Re-enable the button after email sending (whether successful or not)
                    this.isButtonDisabled = false;
                });
        },
        sendEmail(formData) {
            // Replace this with your email sending logic (e.g., using an API or server-side code)
            // Here's an example using the Fetch API:
            return fetch('http://localhost:3000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        },
        resetForm() {
            // Reset the form data
            this.formData.firstName = '';
            this.formData.lastName = '';
            this.formData.email = '';
            this.formData.company = '';
            this.formData.phoneNumber = '';
            this.formData.message = '';
            // Add reset logic for other form fields as needed
        },
    },
};
</script>

<style scoped>.contact {
    max-width: 1200px;
}</style>