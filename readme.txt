# checkout directory
cd fsops

# build cli 

node .

# install cli globally
sudo npm install -g .

# uscommands to perform operations
# Palyground directory fsopsTest
# Create file
fsop create -f ./fsopsTest/test.txt

# Create directory
fsop dir --dirPath ./fsopsTest/testdir1
# Create directory inside directory
fsop dir --dirPath ./fsopsTest/testdir1/testdir1-L2

# Create file inside folder
fsop create -f ./fsopsTest/testdir1/td1-file-1.txt
fsop create -f ./fsopsTest/testdir1/td1-file-2.txt
fsop create -f ./fsopsTest/testdir1/td1-file-3.txt

# Traverse folder
fsop traversedir --dirPath ./fsopsTest
# sample Output ::
[
  './fsopsTest': '["test.txt","testdir1","testdir2"]',
  'fsopsTest/testdir1': '["td1-file-1.txt","td1-file-2.txt","td1-file-3.txt","testdirLevel2","testdirLevel2-1","testdirLevel2-2","testdirLevel2-3"]',
  'fsopsTest/testdir1/testdirLevel2': '[]',
  'fsopsTest/testdir1/testdirLevel2-1': '[]',
  'fsopsTest/testdir1/testdirLevel2-2': '[]',
  'fsopsTest/testdir1/testdirLevel2-3': '[]',
  'fsopsTest/testdir2': '[]'
]

# Current Working Directory
fsop cwd

# Change Working Directory
fsop chdir --dirPath ./fsopsTest