import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = "eu-west-1"
const USER_POOL_ID = 'eu-west-1_Ee9FjtMYr'
const CLIENT_ID = '7uaqkhgq6kmo2h3106siga5jbr'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const BUCKET_NAME = 'kangzeroo-complete-aws-tutorial-pics'
export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID
export const IDENTITY_POOL_ID = 'eu-west-1:d893f9cd-b80f-48d8-99d3-f92370516a1a'
