import { getUserAccounts } from '@/actions/dashboard'
import { defaultCategories } from '@/data/category';
import AddTransactionForm from '../_components/transaction-form';
import React from 'react'

 const AddTransaction = async() => {
  const accounts = await getUserAccounts();
  
  return <div className='max-w-3xl mx-auto px-5'> 
    <h1 className='text-5xl gradient-title mb-8'> Add Transaction</h1>

    <AddTransactionForm accounts={accounts} categories ={defaultCategories}/>
  </div>
  
}

export default AddTransaction