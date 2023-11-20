# Tigerhall Content Search

## How to run the app

In the project directory, you can run:

### `npm install`

To install the dependencies.

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

## Home Screen
<img width="346" alt="image" src="https://github.com/Sanjalee22/tigerhall-content/assets/34329090/9f75f464-8a07-4410-96e6-4f6194a04f20">

## User Flow Chart
![User Flow Diagram drawio](https://github.com/Sanjalee22/tigerhall-content/assets/34329090/31ffcb20-45a3-4286-a5ad-9194f785d3da)

## Project Structure
<img width="346" alt="image" src="https://github.com/Sanjalee22/tigerhall-content/assets/34329090/d7b41046-b6bb-4892-aad4-bea8211491b3">


## Design Choices and Future Scope
1. Used Chakra UI for basic components like flexbox, input etc.
2. React Context can be used for state management and to avoid prop drilling. But since this is a small app which only reads data from the API, context API can be avoided for simplicity.
3. Only implemented the mobile web view of the app. The styles need to be updated to accommodate the large screen (laptop browser) views in an aesthetic fashion.
4. Written unit tests for all the components except the SearchResult component because due to limited knowledge on Graph QL API and how to mock them. The tests can be added in future.
5. Some failing tests are commented. They need to be updated with element selectors other than data-test-id. (To avoid using data-test-id as a best practice)

## An observation in the API result
If the total videos returned by the API call is less than the limit defined as the pagination parameter and the API is called next time with updated offset, same data is returned. I think it should return empty list or no data.

Example: 
Total videos available = 12

First API call: 
offset = 0, limit = 20
Expected response: a list of 12 videos
Received response: a list of 12 videos

Second API call: 
offset = 1, limit = 20
Expected response: empty list or no data
Received response: The first 12 videos.
