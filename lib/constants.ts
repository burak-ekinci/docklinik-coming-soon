export const Templates = {
  contactTemplate: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docklinik Contact Request</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #000;
        }
        .header {
            background-color: black;
            color: white;
            padding: 20px;
            text-align: left;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 12px 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            width: 5%;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Docklinik Contact Request</h1>
    </div>
    <div class="content">
        <p>A new contact request has been received.</p>
        
        <table>
            <tr>
                <th>Name:</th>
                <td>{{name}}</td>
            </tr>
            <tr>
                <th>Email:</th>
                <td>{{email}}</td>
            </tr>
            <tr>
                <th>Phone:</th>
                <td>{{phone}}</td>
            </tr>
            
            <tr>
                <th>Message:</th>
                <td>{{message}}</td>
            </tr>
        </table>
    </div>
    
    <div class="footer">
        <p>This email was sent automatically. Please do not reply.</p>
    </div>
</body>
</html>`,

  notifyMeTemplate: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Notification Request</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #000;
            color: white;
            padding: 20px;
            text-align: left;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Notification Request</h1>
    </div>
    
    <div class="content">
        <p>{{email}} wants to receive notifications.</p>
    </div>
    
    <div class="footer">
        <p>This email was sent automatically. Please do not reply.</p>
    </div>
</body>
</html>
`,
};
