- Description: Restricts a member's ability to communicate.

- Usage: `/timeout <user*: User> <duration*: Number> <reason: String>`

- Parameters:
	- **user**:
		- **Type**: [[User]]
		- **Description**: User to timeout
		- **Required**: Yes
	- **duration**:
		- **Type**: [[String]]
		- **Description**: Duration of the timeout (5s, 1m, 30m, etc.)
		- **Required**: Yes
	- **reason**:
		- **Type**: [[String]]
		- **Description**: Reason for timeout-ing the user
		- **Required**: No