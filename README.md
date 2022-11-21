# Marketplace-App-Monorepo

This application was build using Angular and ASP.NET. The intended objective of the web application is to serve as a marketplace that bridges businesses to customers. Businesses are able to upload their products and customers are able to purchase the said products. 

## Setup for development or preview:

1. Ensure that <a href="https://docs.docker.com/get-docker/">docker</a> and docker-compose are installed

2. In the root of the project folder, start the project using the command:
    ```
    docker-compose up
    ```
    wait for the project to download all dependencies and run
3. Once the project has started navigate to the following URL in the desired web browser:
    > <a href="https://localhost:8080/api/Product/search?query=test&category=test">https://localhost:8080/api/Product/search?query=test&category=test</a>
    
    A prompt will appear to trust the domain. Select "Advanced" then "Accept the risk and continue" or anything similar that allows proceeding to the URL
4. In a new tab open the web application by navigating to the following URL:
    > <a href="http://localhost:3000">http://localhost:3000</a>

Done. the application should now be opened for demonstration or development purposes 