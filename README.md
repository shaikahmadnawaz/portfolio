# A Beginner's Guide to Deploying a React App on AWS EC2 | Step-by-Step Tutorial

Are you ready to deploy your React application to the world? AWS EC2 is a popular choice for hosting web applications due to its scalability, flexibility, and reliability. In this beginner's guide, we'll walk you through the steps required to deploy a React application on an EC2 instance on AWS.

## Prerequisites:

- An AWS account
- A React application that you want to deploy

## Step 1: Launch an EC2 instance

The first step is to launch an EC2 instance on AWS. Here's how you can do it:

1. Log in to your AWS console and navigate to the EC2 service.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683314388306/ce135856-3df7-450b-a1e2-0432df43a729.png)

2. Click on the "Launch Instance" button to start the instance launch wizard.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683314548574/c73cd954-3457-4376-89d9-d3a604b0efb4.png)

3. Choose "Ubuntu Server" as the Amazon Machine Image (AMI).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683314717073/65e93e81-cf98-4541-b49b-7dec65daec5c.png)

4. Creating or Selecting a Key Pair for EC2 Instance:

   During the instance launch process, you will be prompted to either select an existing key pair or create a new one. A key pair is a set of public and private keys that are used to securely connect to the EC2 instance via SSH.

   If you already have a key pair, you can select it during the instance launch process. If not, you can create a new key pair by following these steps:

   1. In the "Configure Instance" step of the launch wizard, scroll down to the "Advanced Details" section.
   2. Click on the "Select" button next to "Key Pair" to open the "Create a new key pair" dialog box.
   3. Enter a name for the key pair and click on the "Create Key Pair" button.
   4. The private key file will be downloaded automatically. Make sure to save it in a safe location on your local machine.

   Note: The private key file should be kept secure and should not be shared with anyone. You will need this key to connect to the EC2 instance via SSH.

   Once you have created or selected a key pair, you can continue with the instance launch process.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683315053187/4a08d7b3-b7e2-4e35-aeb6-06f9424f93ab.png)

5. Select an instance type and configure the instance details as per your requirements.
6. In the "Configure Security Group" step, create a new security group and add rules to allow inbound traffic on port 22 (for SSH access) and ports 80 and 443 (for HTTP and HTTPS traffic).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683315215705/e7cbc6a1-42f0-441e-8191-f3729ab601b7.png)

7. Review the instance details and launch the instance.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683315705056/8551b026-7876-418e-8447-ebcf914dbc88.png)

## Step 2: Connect to the instance

1. Open a terminal window on your local machine.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683316610386/5257c746-eddf-4397-8709-23c9b3398ea6.png)

2. Use the SSH command to connect to your EC2 instance using the public IP address or DNS name of the instance. The command should be in the following format:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683316213513/c758afe0-55c2-4561-ac03-3d8d79d91404.png)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683317271434/c5f6fd02-bb4f-4495-9f33-3232d83f266a.png)

Execute the below command in the same directory where we key(secret-key.pem) was downloaded.

```bash
ssh -i <path-to-private-key> ubuntu@<public-ip-address>

ssh -i "secret-key.pem" ubuntu@ec2-3-108-41-225.ap-south-1.compute.amazonaws.com
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683317091520/6fb7b86c-b477-4b4c-b656-bed33eb026eb.png)

Hurray, Now we are connected to the remote server(ec2 instance) 🥳

## Step 3: Install Node.js and Git

Now that you are connected to the instance, the next step is to install Node.js and Git. Here's how you can do it:

1. Once you are connected to the instance, run the following command to update the package repository:

   ```bash
   sudo apt-get update
   ```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683317632288/428575bc-03dd-4b51-b6db-50551dab04e4.png)

2. Install Node.js and Git using the following commands:

   ```bash
   sudo apt-get install nodejs
   sudo apt-get install npm
   sudo apt-get install git
   ```

   ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683317899852/83f4deae-0b04-40d7-bb7f-187143df5621.png)

## Step 4: Clone your React application

After installing Node.js and Git, the next step is to clone your React application from the Git repository. Here's how you can do it:

Clone your React application from the Git repository using the following command:

```bash
git clone https://github.com/shaikahmadnawaz/react-portfolio
```

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683318070207/d8afd937-c8ff-433e-bfb0-2adccbdab311.png)

Install the node packages:

```bash
npm install
```

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683318345948/e682594b-e7e6-41ab-a75f-65bae216b0a3.png)

## Step 5: Start the application

```bash
npm start
```

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683318472256/79c5ce75-d723-40d9-909e-e526aadc4925.png)

In your browser instead of `localhost:3000` add this `3.108.41.225:3000`

```bash
PublicIPv4address:port
```

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683319149187/f5404efc-4ee7-46a8-8d57-1fa143bdef5e.png)

Click on **security groups**, then go-to **inbound rules** and add one like below and include the port in it, this is required.

**Inbound rules** in Security Groups for EC2 are a set of network access rules that control incoming traffic to your EC2 instances. They allow you to specify which protocols, ports, and IP addresses are allowed to connect to your instances.

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683319212827/8058eadd-8817-4170-b94d-5e0373122d23.png)

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683318912800/84515f0a-4915-4c43-bd0d-c4439c6ec3c5.png)

The project is deployed on AWS 🎉

Don't forget to terminate that instance after work, or else you will be billed 😅

[](https://cdn.hashnode.com/res/hashnode/image/upload/v1683319441202/14164e9a-8c9d-4e28-8904-a8f0dfdbcd3a.png)

## Conclusion

In conclusion, deploying a React application on AWS EC2 is an excellent way to showcase your web application to the world. With the scalable infrastructure and flexibility provided by AWS, you can ensure that your application is available and performing well for your users.

In this beginner's guide, we have walked through the step-by-step process of launching an Ubuntu EC2 instance, installing Node.js and Git, cloning your React application, and finally, testing your application. By following these instructions, you are now equipped to deploy your own React applications on AWS EC2.

So, what are you waiting for? Take the plunge and deploy your React application on AWS EC2 today. Share your creativity, ideas, and innovations with the world. Start building your online presence and engaging with your users on a robust and reliable platform.

Remember, the journey doesn't end here. AWS offers a wide range of services and tools to enhance your application's performance, security, and scalability. Explore options like AWS Elastic Beanstalk, AWS CodeDeploy, and AWS CloudFront to further optimize and automate your deployment process.

Now it's your turn to dive into the world of AWS and unleash the full potential of your React applications. Happy deploying!

If you have any questions or need further assistance, feel free to leave a comment below. We are here to support you on your deployment journey.

And don't forget to connect with us on social media to stay updated with the latest tips, tutorials, and guides:

- Connect with us on LinkedIn: [Shaik Ahmad Nawaz](https://www.linkedin.com/in/shaik-ahmad-nawaz-894425239/)
- Follow us on Twitter: [@shaikahmadnawaz](https://twitter.com/shaikahmadnawaz)

We also encourage you to check out our GitHub repository for more code samples and projects:

- Explore our GitHub: [shaikahmadnawaz](https://github.com/shaikahmadnawaz)

If you found this guide helpful, please consider sharing it with your friends and colleagues who might also benefit from it. Together, let's empower more developers to deploy their React applications on AWS EC2 and make a mark in the digital landscape.
