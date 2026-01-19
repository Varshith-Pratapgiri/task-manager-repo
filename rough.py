class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self, val):
        new = Node(val)
        self.head = new
        self.tail = new
        self.length = 1

    def append(self, val):
        new = Node(val)
        if self.length == 0:
            self.head = new
            self.tail = new
        else:
            self.tail.next = new
            self.tail = new
        self.length += 1
        return True
    
    def prepend(self, val):
        new = Node(val)
        if self.length == 0:
            self.head = new
            self.tail = new
        else:
            new.next = self.head
            self.head = new
        self.length += 1
        return True
    
    def insert(self, pos, val):
        if pos < 1 or pos > self.length+1:
            return None
        if pos == 1:
            return self.prepend(val)
        if pos == self.length+1:
            return self.append(val)
        new = Node(val)
        prev = self.head 
        cnt = 1
        while cnt < pos-1:
            prev = prev.next
            cnt += 1
        new.next = prev.next
        prev.next = new
        self.length += 1
        return True
    
    def pop_last(self):
        if self.length == 0:
            return None
        if self.length == 1:
            self.head = None
            self.tail = None
            self.length -= 1
            return True
        prev = self.head
        while prev.next.next:
            prev = prev.next 
        self.tail = prev
        prev.next = None
        self.length -= 1
        return True
    
    def pop_first(self):
        if self.length == 0:
            return None
        if self.length == 1:
            self.head = None
            self.tail = None
            self.length -= 1
            return True
        temp = self.head 
        self.head = temp.next 
        temp.next = None
        self.length -= 1
        return True
    
    def remove(self, pos):
        if self.length == 0:
            return None
        if pos < 1 or pos > self.length:
            return None
        if pos == 1:
            return self.pop_first()
        if pos == self.length:
            return self.pop_last()
        cnt = 1
        prev = self.head 
        while cnt < pos-1:
            prev = prev.next
            cnt += 1
        temp = prev.next
        prev.next = temp.next 
        self.length -= 1
        temp.next = None
        return True
    
    def printLinkedList(self):
        temp = self.head
        while temp:
            print(temp.val, end=" ")
            temp = temp.next
        print()

class Stack:
    def __init__(self, val):
        new = Node(val)
        self.top = new
        self.height = 1

    def push(self, val):
        new = Node(val)
        new.next = self.top 
        self.top = new
        self.height += 1
        return True
    
    def pop(self):
        if self.top is None:
            return None
        temp = self.top
        self.top = temp.next
        temp.next = None
        self.height -= 1
        return True
    
    def getHeight(self):
        print(self.height) 
    
    def printStack(self):
        node = self.top
        while node:
            print(node.val, end=" ")
            node = node.next
        print()

my_Stack = Stack(4)
my_Stack.push(8)
my_Stack.printStack()
my_Stack.push(5)
my_Stack.push(6)
my_Stack.push(3)
my_Stack.push(1)
my_Stack.pop()
my_Stack.printStack()
my_Stack.getHeight()