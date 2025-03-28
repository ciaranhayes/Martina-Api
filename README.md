# API Queer Book Repository 

This is an api with a selection of 100 queer books in various genres. The API may be used to get random recommendations or see the full list, filter through genre or ID. You may also create new books, edit them and delete with full CRUD functionality. 

To get started with the API locally you need to run -

run - 

```bash
npm install
```
This will download the correct dependencies in order for the project to work. 

You can then run - 
```bash
npm run dev
```
or 
```bash
node server.js
```

## Documentation of HTTP methods

### <span style="color: #90EE90;">GET</span>  Random Recommendation

This will retrieve a random book from the database which can be used to get a random book recommendation.


```
http://localhost:5173/recommendation
```
```bash
curl --location 'http://localhost:5173/recommendation'
```

### <span style="color: #90EE90;">GET</span> Random Recommendation Deployed
```
https://queer-books-api.onrender.com/recommendation
```
```bash
curl --location 'https://queer-books-api.onrender.com/recommendation'
```
#### Example Output
```JSON
[
    {
        "_id": "67e6e780f3ee5d721bcbd781",
        "title": "The Gilded Wolves",
        "author": "Roshani Chokshi",
        "genres": [
            "Fantasy",
            "Adventure",
            "LGBTQIA+"
        ],
        "short_description": "Set in 19th-century Paris, a group of thieves with magical abilities navigates mystery and romance in a high-stakes heist.",
        "page_length": 368
    }
]
```
<br>

### <span style="color: #90EE90;">GET</span> By ID
This will allow you to get a specific movie by it's ID. It includes a path variable which should be that of the ID. 
```
http://localhost:5173/books/:ID
```
```
curl --location 'http://localhost:5173/books/:ID'
```
| **Path Variable** | **ID**                              |
|-------------------|-------------------------------------|
| ID                | 67e6e780f3ee5d721bcbd75e            |

### <span style="color: #90EE90;">GET</span> By ID Deployed
```
https://queer-books-api.onrender.com/books/:ID
```
```bash
curl --location 'https://queer-books-api.onrender.com/books/:ID'
```
#### Path Variable
ID &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;67e6e780f3ee5d721bcbd75e
```JSON
{
    "_id": "67e6e780f3ee5d721bcbd75e",
    "title": "Call Me by Your Name",
    "author": "André Aciman",
    "genres": [
        "Romance",
        "Literary Fiction"
    ],
    "short_description": "A passionate summer romance between two young men in Italy, exploring identity, desire, and heartbreak.",
    "page_length": 256
}
```
<br>

### <span style="color: #90EE90;">GET</span> All Books
This will give you all of the books in database to display. 
```
https://queer-books-api.onrender.com/books
```
```
curl --location 'http://localhost:5173/books'
```
### <span style="color: #90EE90;">GET</span> All Books Deployed
```
https://queer-books-api.onrender.com/books
```
```
curl --location 'https://queer-books-api.onrender.com/books'
```

#### Example output

```JSON
[
    {
        "_id": "67e6e780f3ee5d721bcbd75e",
        "title": "Call Me by Your Name",
        "author": "André Aciman",
        "genres": [
            "Romance",
            "Literary Fiction"
        ],
        "short_description": "A passionate summer romance between two young men in Italy, exploring identity, desire, and heartbreak.",
        "page_length": 256
    },
    {
        "_id": "67e6e780f3ee5d721bcbd75f",
        "title": "The Song of Achilles",
        "author": "Madeline Miller",
        "genres": [
            "Fantasy",
            "Romance"
        ],
        "short_description": "A retelling of the Iliad, focusing on the love story between Achilles and Patroclus.",
        "page_length": 369
    }, etc.....
```
<br>

### <span style="color: #90EE90;">GET</span> By Genre
This allows you to filter out the books by genre. 
```
http://localhost:5173/books/genre/:genre
```
```
curl --location 'http://localhost:5173/books/genre/:genre'
```
| **Path Variable** | **Genre**  |
|-------------------|------------|
| genre             | Fantasy    |


#### Example output
```JSON
[
    {
        "_id": "67e6e780f3ee5d721bcbd75f",
        "title": "The Song of Achilles",
        "author": "Madeline Miller",
        "genres": [
            "Fantasy",
            "Romance"
        ],
        "short_description": "A retelling of the Iliad, focusing on the love story between Achilles and Patroclus.",
        "page_length": 369
    },
    {
        "_id": "67e6e780f3ee5d721bcbd762",
        "title": "The Priory of the Orange Tree",
        "author": "Samantha Shannon",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "short_description": "A sprawling epic about dragons, political intrigue, and queer relationships in a world on the brink of destruction.",
        "page_length": 848
    }, etc...
```

### <span style="color: #90EE90;">GET</span> By Genre Deployment
```
https://queer-books-api.onrender.com/books/genre/:genre
```
```
curl --location 'https://queer-books-api.onrender.com/books/genre/:genre'
```
| **Path Variable** | **Genre**  |
|-------------------|------------|
| genre             | Romance    |

```JSON
[
    {
        "_id": "67e6e780f3ee5d721bcbd75e",
        "title": "Call Me by Your Name",
        "author": "André Aciman",
        "genres": [
            "Romance",
            "Literary Fiction"
        ],
        "short_description": "A passionate summer romance between two young men in Italy, exploring identity, desire, and heartbreak.",
        "page_length": 256
    },
    {
        "_id": "67e6e780f3ee5d721bcbd75f",
        "title": "The Song of Achilles",
        "author": "Madeline Miller",
        "genres": [
            "Fantasy",
            "Romance"
        ],
        "short_description": "A retelling of the Iliad, focusing on the love story between Achilles and Patroclus.",
        "page_length": 369
    }, etc... 
```
<br>

### <span style="color: yellow;">POST</span> Create Book
Use this to create a new book entry - all body fields are required.
```
http://localhost:5173/books/new
```
```
curl --location 'http://localhost:5173/books/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=' \
--data-urlencode 'author=' \
--data-urlencode 'genres=' \
--data-urlencode 'description=' \
--data-urlencode 'page='
```

### <span style="color: yellow;">POST</span> Create Book Deployed
```
https://queer-books-api.onrender.com/books/new
```
```
curl --location 'https://queer-books-api.onrender.com/books/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=' \
--data-urlencode 'author=' \
--data-urlencode 'genres=' \
--data-urlencode 'description=' \
--data-urlencode 'page='
```
| **Body**     | **Value**                                      |
|---------------|------------------------------------------------|
| **title**     | On Earth We're Briefly Gorgeous                |
| **author**    | Ocean Vuong                                    |
| **genres**    | Autobiography                                  |
| **description**| A retelling of his life through letters to his mother |
| **pages**     | 230                                            |

#### Expected Output
```JSON
{
    "title": "On Earth We're Brieflly Gorgeous",
    "author": "Ocean Vuong",
    "genres": [
        "Autobioraghy"
    ],
    "short_description": "A retelling of his life through letters to his mother",
    "page_length": 230,
    "_id": "67e707f9c22cc84b93b710f4",
    "__v": 0
}
```
<br>

### <span style="color: skyblue;">PUT</span> Update Whole Book By ID
You can use this to update all body elements of the book - you must type in everything for this to work as it is a PUT request. 
```
http://localhost:5173/books/edit/:ID
```
```
curl --location --request PUT 'http://localhost:5173/books/edit/:ID' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=' \
--data-urlencode 'author=' \
--data-urlencode 'genres=' \
--data-urlencode 'description=' \
--data-urlencode 'page='
```
### <span style="color: skyblue;">PUT</span> Update Whole Book By ID Deployed
You can use this to update all body elements of the book - you must type in everything for this to work as it is a PUT request. 
```
https://queer-books-api.onrender.com/books/edit/:ID
```
```
curl --location --request PUT 'https://queer-books-api.onrender.com/books/edit/:ID' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=' \
--data-urlencode 'author=' \
--data-urlencode 'genres=' \
--data-urlencode 'description=' \
--data-urlencode 'page='
```
| **Path Variable** | **ID**                                |
|-------------------|---------------------------------------|
| ID                | 67e707f9c22cc84b93b710f4              |

| **Body**        | **Value**                                      |
|------------------|------------------------------------------------|
| **title**        | Time is A Mother                               |
| **author**       | Ocean Vuong                                    |
| **genres**       | Poetry                                         |
| **description**  | Collection of poems about queerness            |
| **pages**        | 128                                            |

```JSON
{
    "_id": "67e707f9c22cc84b93b710f4",
    "title": "Time is A Mother",
    "author": "Ocean Vuong",
    "genres": [
        "Poetry"
    ],
    "short_description": "Collection of poems abotu queerness",
    "page_length": 128,
    "__v": 0
}
```
<br>

### <span style="color: #B78CD7;">PATCH</span> Update Partial
You can use this to update only one or more of the body elements by referencing the ID. The body options are title, author, genres, description and pages
```
http://localhost:5173/book/patch/:ID
```
```
curl --location --request PATCH 'http://localhost:5173/book/patch/:ID' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode '{body}='
```

### <span style="color: #B78CD7;">PATCH</span> Update Partial Deployed
```
https://queer-books-api.onrender.com/book/patch/:ID
```
```
curl --location --request PATCH 'https://queer-books-api.onrender.com/book/patch/:ID' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode '{body}='
```
| **Path Variable** | **ID**                                |
|-------------------|---------------------------------------|
| ID                | 67e707f9c22cc84b93b710f4              |
| **Field**        | **Value**                                      |
|------------------|------------------------------------------------|
| **title**        | The Wheel of Time                             |


#### Expected Outcome
```JSON
{
    "_id": "67e707f9c22cc84b93b710f4",
    "title": "The Wheel of Time",
    "author": "Ocean Vuong",
    "genres": [
        "Poetry"
    ],
    "short_description": "Collection of poems abotu queerness",
    "page_length": 128,
    "__v": 0
}
```

### <span style="color: #FF9999;">DELETE</span> Delete by ID
Delete an addition with the ID number as the path variable. 
```
http://localhost:5173/books/remove/:ID
```
```
curl --location --request DELETE 'http://localhost:5173/books/remove/:ID'
```

### <span style="color: #FF9999;">DELETE</span> Delete by ID Deployed
```
https://queer-books-api.onrender.com/books/remove/:ID
```
```
curl --location --request DELETE 'https://queer-books-api.onrender.com/books/remove/:ID'
```

| **Path Variable** | **ID**                                |
|-------------------|---------------------------------------|
| ID                | 67e707f9c22cc84b93b710f4              |

#### Expected Output
```HTML
Book Deleted
```