# GraphQL Paginated Characters Query

## Objective
Learners will create GraphQL queries to retrieve a paginated list of characters.

## Endpoint
Use the following GraphQL API:


## Instructions
Use the `characters(page: Int)` field to fetch characters from the API.

Create a separate file for each page query:

- Page 1  
- Page 2  
- Page 3  
- Page 4  

### Each query must include these character fields:
- `id`
- `name`
- `status`
- `image`

For each page:
- Create a `.graphql` file containing the query
- Create a `-output.json` file containing the API response


# GraphQL Episode Query

## Objective
Learners will write a GraphQL query to retrieve a specific episode by ID.

## Endpoint
Use the following GraphQL API:



## Instructions
Use the `episode(id: ID!)` field to fetch information about an episode.

### Each query must include:
- `id`
- `name`
- `air_date`
- `episode`

Create:
- `episode-1.graphql`
- `episode-1-output.json`
