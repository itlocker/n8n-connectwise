![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-connectwise

This repo contains a node which will provide access to Connectwise PSA.

## Using this community node

The Connectwise node implements the following actions &amp; operations:

- Company
  - Get All Companies
- Service Ticket
  - Get All Service Tickets
  - Add a Service Ticket Note

In the case of GET operations, the following optional fields have been implemented:

- Conditions (default: null) - filter results
- Fields (default: null) - which fields to return
- Page Size (default: 1000) - how many results are returned
- Page ID: (default: 0) - if the result set is greater than Page Size, what page index do you want to return

For more information [visit the Connectwise developer site](https://developer.connectwise.com/)

## License

[MIT](https://github.com/itlocker/n8n-connectwise/blob/master/LICENSE.md)
