var token_abi = [{'inputs': [], 'constant': true, 'name': 'mintingFinished', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'name', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_spender'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'approve', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'totalSupply', 'outputs': [{'type': 'uint256', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_from'}, {'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'transferFrom', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'decimals', 'outputs': [{'type': 'uint8', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_amount'}], 'constant': false, 'name': 'mint', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'version', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_owner'}], 'constant': true, 'name': 'balanceOf', 'outputs': [{'type': 'uint256', 'name': 'balance'}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': false, 'name': 'finishMinting', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'owner', 'outputs': [{'type': 'address', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'symbol', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'transfer', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_owner'}, {'type': 'address', 'name': '_spender'}], 'constant': true, 'name': 'allowance', 'outputs': [{'type': 'uint256', 'name': 'remaining'}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': 'newOwner'}], 'constant': false, 'name': 'transferOwnership', 'outputs': [], 'payable': false, 'type': 'function'}, {'payable': false, 'type': 'fallback'}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'to'}, {'indexed': false, 'type': 'uint256', 'name': 'amount'}], 'type': 'event', 'name': 'Mint', 'anonymous': false}, {'inputs': [], 'type': 'event', 'name': 'MintFinished', 'anonymous': false}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'owner'}, {'indexed': true, 'type': 'address', 'name': 'spender'}, {'indexed': false, 'type': 'uint256', 'name': 'value'}], 'type': 'event', 'name': 'Approval', 'anonymous': false}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'from'}, {'indexed': true, 'type': 'address', 'name': 'to'}, {'indexed': false, 'type': 'uint256', 'name': 'value'}], 'type': 'event', 'name': 'Transfer', 'anonymous': false}];
var bounty_abi = [{'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'killBounty', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyToken', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}], 'name': 'fulfillBounty', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newDeadline', 'type': 'uint256'}], 'name': 'extendDeadline', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'getNumBounties', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}], 'name': 'updateFulfillment', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newFulfillmentAmount', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'increasePayout', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newFulfillmentAmount', 'type': 'uint256'}], 'name': 'changeBountyFulfillmentAmount', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newIssuer', 'type': 'address'}], 'name': 'transferIssuer', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'activateBounty', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_issuer', 'type': 'address'}, {'name': '_deadline', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}, {'name': '_fulfillmentAmount', 'type': 'uint256'}, {'name': '_arbiter', 'type': 'address'}, {'name': '_paysTokens', 'type': 'bool'}, {'name': '_tokenContract', 'type': 'address'}], 'name': 'issueBounty', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_issuer', 'type': 'address'}, {'name': '_deadline', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}, {'name': '_fulfillmentAmount', 'type': 'uint256'}, {'name': '_arbiter', 'type': 'address'}, {'name': '_paysTokens', 'type': 'bool'}, {'name': '_tokenContract', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'issueAndActivateBounty', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyArbiter', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'contribute', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newPaysTokens', 'type': 'bool'}, {'name': '_newTokenContract', 'type': 'address'}], 'name': 'changeBountyPaysTokens', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyData', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'getFulfillment', 'outputs': [{'name': '', 'type': 'bool'}, {'name': '', 'type': 'address'}, {'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newArbiter', 'type': 'address'}], 'name': 'changeBountyArbiter', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newDeadline', 'type': 'uint256'}], 'name': 'changeBountyDeadline', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'acceptFulfillment', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'bounties', 'outputs': [{'name': 'issuer', 'type': 'address'}, {'name': 'deadline', 'type': 'uint256'}, {'name': 'data', 'type': 'string'}, {'name': 'fulfillmentAmount', 'type': 'uint256'}, {'name': 'arbiter', 'type': 'address'}, {'name': 'paysTokens', 'type': 'bool'}, {'name': 'bountyStage', 'type': 'uint8'}, {'name': 'balance', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBounty', 'outputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'bool'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newData', 'type': 'string'}], 'name': 'changeBountyData', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getNumFulfillments', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'name': '_owner', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}], 'name': 'BountyIssued', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': false, 'name': 'issuer', 'type': 'address'}], 'name': 'BountyActivated', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'fulfiller', 'type': 'address'}, {'indexed': true, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'BountyFulfilled', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': false, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'FulfillmentUpdated', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'fulfiller', 'type': 'address'}, {'indexed': true, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'FulfillmentAccepted', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'issuer', 'type': 'address'}], 'name': 'BountyKilled', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'contributor', 'type': 'address'}, {'indexed': false, 'name': 'value', 'type': 'uint256'}], 'name': 'ContributionAdded', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': false, 'name': 'newDeadline', 'type': 'uint256'}], 'name': 'DeadlineExtended', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}], 'name': 'BountyChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': true, 'name': '_newIssuer', 'type': 'address'}], 'name': 'IssuerTransferred', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': false, 'name': '_newFulfillmentAmount', 'type': 'uint256'}], 'name': 'PayoutIncreased', 'type': 'event'}];
var kudos_abi = [{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cloneFeePercentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isMintable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kudos","outputs":[{"name":"priceFinney","type":"uint256"},{"name":"numClonesAllowed","type":"uint256"},{"name":"numClonesInWild","type":"uint256"},{"name":"clonedFromId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_priceFinney","type":"uint256"},{"name":"_numClonesAllowed","type":"uint256"},{"name":"_tokenURI","type":"string"}],"name":"mint","outputs":[{"name":"tokenId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_numClonesRequested","type":"uint256"}],"name":"clone","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_cloneFeePercentage","type":"uint256"}],"name":"setCloneFeePercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_isMintable","type":"bool"}],"name":"setMintable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_newPriceFinney","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getKudosById","outputs":[{"name":"priceFinney","type":"uint256"},{"name":"numClonesAllowed","type":"uint256"},{"name":"numClonesInWild","type":"uint256"},{"name":"clonedFromId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getNumClonesInWild","outputs":[{"name":"numClonesInWild","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLatestId","outputs":[{"name":"tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var sablier_proxy_abi = [{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"relayers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sablier","outputs":[{"internalType":"contract Sablier","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHubAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"}],"name":"preRelayedCall","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"relayHubVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextSalaryId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"},{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"actualCharge","type":"uint256"},{"internalType":"bytes32","name":"preRetVal","type":"bytes32"}],"name":"postRelayedCall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"salaryId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"streamId","type":"uint256"},{"indexed":true,"internalType":"address","name":"company","type":"address"}],"name":"CreateSalary","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"salaryId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"streamId","type":"uint256"},{"indexed":true,"internalType":"address","name":"company","type":"address"}],"name":"WithdrawFromSalary","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"salaryId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"streamId","type":"uint256"},{"indexed":true,"internalType":"address","name":"company","type":"address"}],"name":"CancelSalary","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldRelayHub","type":"address"},{"indexed":true,"internalType":"address","name":"newRelayHub","type":"address"}],"name":"RelayHubChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"trustedSigner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"address","name":"signerAddress","type":"address"},{"internalType":"address","name":"sablierAddress","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"relayer","type":"address"},{"internalType":"uint256","name":"salaryId","type":"uint256"}],"name":"whitelistRelayer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"relayer","type":"address"},{"internalType":"uint256","name":"salaryId","type":"uint256"}],"name":"discardRelayer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"relay","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"bytes","name":"encodedFunction","type":"bytes"},{"internalType":"uint256","name":"transactionFee","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"approvalData","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"acceptRelayedCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"salaryId","type":"uint256"}],"name":"getSalary","outputs":[{"internalType":"address","name":"company","type":"address"},{"internalType":"address","name":"employee","type":"address"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"stopTime","type":"uint256"},{"internalType":"uint256","name":"remainingBalance","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"employee","type":"address"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"stopTime","type":"uint256"}],"name":"createSalary","outputs":[{"internalType":"uint256","name":"salaryId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"employee","type":"address"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"stopTime","type":"uint256"},{"internalType":"uint256","name":"senderSharePercentage","type":"uint256"},{"internalType":"uint256","name":"recipientSharePercentage","type":"uint256"}],"name":"createCompoundingSalary","outputs":[{"internalType":"uint256","name":"salaryId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"salaryId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFromSalary","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"salaryId","type":"uint256"}],"name":"cancelSalary","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

var bounty_address = function() {
  if (document.web3network === null) {
    // default to mainnet if web3network isn't found in time
    document.web3network = 'mainnet';
  }
  switch (document.web3network) {
    case 'mainnet':
      return '0x2af47a65da8cd66729b4209c22017d6a5c2d2400';
    case 'ropsten':
      throw 'this network is not supported in bounty_address() for gitcoin';
    case 'kovan':
      throw 'this network is not supported in bounty_address() for gitcoin';
    case 'rinkeby':
      return '0xf209d2b723b6417cbf04c07e733bee776105a073';
    case 'custom network':
      // This only works if you deploy the Standard Bounties contract locally
      // Set the testrpc address to the address below in in the truffle.js file.
      // In the Standard Bounties repo, `truffle deploy --network testrpc`
      return '0x9ee228365ebc1da6a5d025fdf0939edf2bea21da';
  }
};

var kudos_address = function() {
  if (document.web3network === null) {
    // default to mainnet if web3network isn't found in time
    document.web3network = 'mainnet';
  }
  switch (document.web3network) {
    case 'mainnet':
      return '0x2aea4add166ebf38b63d09a75de1a7b94aa24163';
    case 'ropsten':
      return '0xcd520707fc68d153283d518b29ada466f9091ea8';
    case 'kovan':
      throw 'this network is not supported for kudos';
    case 'rinkeby':
      return '0x4077ae95eec529d924571d00e81ecde104601ae8';
    case 'custom network':
      // This only works if you deploy the Standard Bounties contract locally
      // Set the testrpc address to the address below in in the truffle.js file.
      // In the Standard Bounties repo, `truffle deploy --network testrpc`
      return '0xe7bed272ee374e8116049d0a49737bdda86325b6';
  }
};

var sablier_proxy_address = function() {
  if (document.web3network === null) {
    // default to mainnet if web3network isn't found in time
    document.web3network = 'mainnet';
  }
  switch (document.web3network) {
    case 'mainnet':
      return '0xbd6a40Bb904aEa5a49c59050B5395f7484A4203d';
    case 'ropsten':
      return '0x7ee114C3628Ca90119fC699f03665bF9dB8f5faF';
    case 'kovan':
      throw '0x7ee114C3628Ca90119fC699f03665bF9dB8f5faF';
    case 'rinkeby':
      return '0x7ee114C3628Ca90119fC699f03665bF9dB8f5faF';
    case 'custom network':
      // This only works if you deploy the Standard Bounties contract locally
      // Set the testrpc address to the address below in in the truffle.js file.
      // In the Standard Bounties repo, `truffle deploy --network testrpc`
      return 'this network is not supported for streaming money with Sablier';
  }
};

/**
 * Returns etherscan link of transaction /
 * @param {string} id
 * @param {string} network
 * @param {enum} type tx | address
 */
var get_etherscan_url = function(id, network, type = 'tx') {
  let _network = network ? network : document.web3network;
  switch (_network) {
    case 'mainnet':
      return 'https://etherscan.io/' + type + '/' + id;
    case 'ropsten':
      return 'https://ropsten.etherscan.io/' + type + '/' + id;
    case 'kovan':
      return 'https://kovan.etherscan.io/'  + type + '/' + id;
    case 'rinkeby':
      return 'https://rinkeby.etherscan.io/' + type + '/' + id;
    case 'custom network':
      return 'https://localhost/' + type + '/' + id;
    default:
      return 'https://etherscan.io/' + type + '/' + id;
  }
};

var get_sablier_url = function(id, isPayee = false) {
  let prefix = isPayee ? 'app':'pay'
  let baseURL = 'sablier.finance'
  switch (document.web3network) {
    case 'mainnet':
      return `https://${prefix}.${baseURL}/stream/${id}`;
    case 'ropsten':
      return `https://${prefix}.${baseURL}/stream/${id}`;
    case 'kovan':
      return `https://${prefix}.${baseURL}/stream/${id}`;
    case 'rinkeby':
      return `https://${prefix}.${baseURL}/stream/${id}`;
    case 'custom network':
      return null;
    default:
      return `https://${prefix}.${baseURL}/stream/${id}`;
  }

}

var erc20_approve_gas = 560000;
var max_gas_for_erc20_bounty_post = 517849;
var gasLimitMultiplier = 4;
var gasMultiplier = 1.3;
var defaultGasPrice = Math.pow(10, 9) * 5; // 5 gwei
var weiPerEther = Math.pow(10, 18);
