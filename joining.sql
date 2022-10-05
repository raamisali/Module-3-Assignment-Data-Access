

select saleslt.Address, SalesLT.Customer
From SalesLT.Address
left join SalesLT.CustomerAddress on SalesLT.Customer.FirstName=SalesLT.Address.AddressLine1