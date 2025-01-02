# MuleSoft Connector Recommendation Chatbot - Need2Connect

This project is a MuleSoft-based chatbot designed to assist users in identifying the most suitable connectors for their MuleSoft integration flows. By leveraging the **MuleSoft AI Chain Connector** and implementing a **Retrieval-Augmented Generation (RAG)** architecture, the chatbot provides accurate and context-aware recommendations.

## Overview

The chatbot enhances the user experience by suggesting appropriate MuleSoft connectors based on user queries. It utilizes a local knowledge store containing vectorized data from **Anypoint Exchange** documentation, enabling efficient retrieval and recommendation of connectors that align with user needs. Additionally, the project includes a user-friendly interface built with HTML, CSS, and JavaScript that connects to the chatbot's MuleSoft API.

## Objective

The primary goal of this project is to streamline the process of selecting MuleSoft connectors by:
- **Providing Accurate Recommendations**: Suggesting connectors that best fit the user's integration requirements.
- **Enhancing User Experience**: Offering a conversational interface for seamless interaction.
- **Leveraging Advanced AI Techniques**: Utilizing RAG architecture to improve the relevance and accuracy of responses.

## System Architecture

The chatbot's architecture comprises the following components:

1. **MuleSoft API**: Manages the chatbot's operations and integrates various flows.

2. **Local Knowledge Store**: A repository that stores vectorized data from Anypoint Exchange documentation, facilitating quick retrieval of relevant information.

3. **Data Vectorization Flows**:
   - `/store`: Creates the local knowledge store.
   - `/addDocs`: Adds vectorized data about all connectors from Anypoint Exchange into the knowledge store.

4. **User Query Processing Flow**:
   - `/template`: Processes user requests by passing them to a Large Language Model (LLM) along with contextual data from the knowledge store to generate accurate responses.
  
![Capture d'écran 2025-01-02 010728](https://github.com/user-attachments/assets/255ba6ff-ce07-4481-8645-91b0c971d524)

5. **Front-End Interface**:

   - A responsive web interface created with HTML, CSS, and JavaScript to allow users to interact with the chatbot.
   - The interface communicates with the MuleSoft API via HTTP requests, sending user queries and displaying responses in real time.
  
   ![frontend](https://github.com/user-attachments/assets/ddbead55-cab3-4819-89ee-d1487209a033)

## Work Environment

- **MuleSoft Anypoint Studio**: The development environment used to build, test, and deploy the MuleSoft API flows.
- **MuleSoft AI Chain Connector**: Facilitates the integration of AI capabilities within the MuleSoft ecosystem.
- **Retrieval-Augmented Generation (RAG)**: Enhances AI-generated outputs by retrieving relevant content to augment AI prompts with additional context.
- **Anypoint Exchange**: Serves as the source of connector documentation and information.
- **HTML, CSS, and JavaScript**: Powers the front-end interface for user interaction.


## Getting Started

Follow these steps to set up and run the chatbot:

1. **Prerequisites**:
   - Java
   - Anypoint Studio
   - LLM API key (**LLaMA 3-70B** is used in this project)

2. **Installation**:
   - Clone the repository:
     ```bash
     git clone https://github.com/yourusername/MuleSoft-Chatbot-Connector-Recommender.git
     ```
   - import the project `.jar` file into MuleSoft Anypoint Studio.
   - Ensure the MuleSoft AI Chain Connector is added to your project.

3. **Configuration**:
   - Set up the local knowledge store by running the `/store` flow.
   - Add connector documentation data by executing the `/addDocs` flow.

4. **Front-End Setup**:
   - Navigate to the `frontend` folder in the project directory.
   - Open the `index.html` file in your browser to load the chatbot interface.

5. **Running the Chatbot**:
   - Run the Mule application locally in Anypoint Studio
   - Interact with the chatbot through the front-end interface, submitting queries to receive connector recommendations.
   - User queries submitted through the interface are sent via JavaScript to the `/template` endpoint of the MuleSoft API for processing.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.


## Acknowledgments

Special thanks to the MuleSoft community and the developers of the MuleSoft AI Chain Connector for their invaluable resources and support.
