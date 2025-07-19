import React from 'react'

export default function EmployementInfo() {
    return (
        <div>
            <div>
                <section class="min-h-screen bg-gray-100 py-10">
                    <div class="container mx-auto px-4">
                        <div class="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
                            <h3 class="text-2xl font-bold mb-8 text-gray-800">Employment Information</h3>

                            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        id="floating_filled"
                                        placeholder=" "
                                        class="peer h-14 w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label
                                        for="floating_filled"
                                        class="absolute left-4 px-1 bg-white text-sm text-gray-500 transition-all duration-300 transform top-1/2 -translate-y-[2.4rem] scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1/2 peer-focus:-translate-y-[2.4rem] peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Company Name
                                    </label>
                                </div>


                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        id="floating_filled"
                                        placeholder=" "
                                        class="peer h-14 w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label
                                        for="floating_filled"
                                        class="absolute left-4 px-1 bg-white text-sm text-gray-500 transition-all duration-300 transform top-1/2 -translate-y-[2.4rem] scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1/2 peer-focus:-translate-y-[2.4rem] peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Designation
                                    </label>
                                </div>



                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        id="floating_filled"
                                        placeholder=" "
                                        class="peer h-14 w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label
                                        for="floating_filled"
                                        class="absolute left-4 px-1 bg-white text-sm text-gray-500 transition-all duration-300 transform top-1/2 -translate-y-[2.4rem] scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1/2 peer-focus:-translate-y-[2.4rem] peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Years Of Experience
                                    </label>
                                </div>



                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        id="floating_filled"
                                        placeholder=" "
                                        class="peer h-14 w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label
                                        for="floating_filled"
                                        class="absolute left-4 px-1 bg-white text-sm text-gray-500 transition-all duration-300 transform top-1/2 -translate-y-[2.4rem] scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1/2 peer-focus:-translate-y-[2.4rem] peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Location
                                    </label>
                                </div>

                                <div class="relative">
                                    <input
                                        type="date"
                                        id="date"
                                        class="h-14 w-full px-4 py-2 peer focus:ring-2 rounded-lg text-sm text-gray-900 bg-gray-50 border-2 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:border-blue-600"
                                        placeholder=" "
                                    />
                                    <label
                                        for="date"
                                        class="absolute top-0 left-4 -translate-y-1/2 px-1 bg-gray-50 text-sm text-gray-500 dark:text-gray-400 z-10"
                                    >
                                        Joined Date
                                    </label>
                                </div>

                                <div class="relative">
                                    <input
                                        type="date"
                                        id="date"
                                        class="h-14 w-full px-4 py-2 peer focus:ring-2 rounded-lg text-sm text-gray-900 bg-gray-50 border-2   border-b-2  border-gray-300 appearance-none dark:text-black dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:border-blue-600"
                                        placeholder=" "
                                    />
                                    <label
                                        for="date"
                                        class="absolute top-0 left-4 -translate-y-1/2 px-1 bg-gray-50 text-sm text-gray-500 dark:text-gray-400 z-10"
                                    >
                                        End Date
                                    </label>
                                </div>


                                <div class="col-span-1 md:col-span-2 flex items-center mt-2">
                                    <input type="checkbox" id="currentlyWorking"
                                        class="mr-2 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                                    <label for="currentlyWorking" class="text-gray-700">Currently Working</label>
                                </div>


                                <div class="relative w-full">
                                   
                                    <button type="submit"
                                        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                                        Previous
                                    </button>
                                </div>

                                <div class="relative w-full ">
                                   
                                    <button type="submit"
                                        class="bg-blue-600 float-end hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 justify-around">
                                        Next
                                    </button>
                                    
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}
