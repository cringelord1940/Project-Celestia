/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

// type Form = {
//   type?: string
//   email?: ''
//   password?: ''
// }

type Form = Record<string, string>

// const formHandler = (
//   initial: Form = {
//     email: '',
//     password: '',
//   },
// ) => {
//   const [formData, setFormData] = useState(initial)

//   const handleChange = (e: any) => {
//     const value =
//       e.target.type === 'checkbox' ? e.target.checked : e.target.value
//     const name = e.target.name
//     setFormData((state) => ({ ...state, [name]: value }))
//   }

//   const executeForm = async (e: any, callback: any) => {
//     e.preventDefault()
//     await callback(formData, toast)
//   }

//   return { handleChange, executeForm }
// }

const form = ({
  initial,
  onInit,
  onSubmit,
  onError,
}: {
  initial: Form
  onInit?: () => void
  onSubmit: (f: Form, e: FormEvent) => Promise<void>
  onError?: (e: { error: unknown; msg: string }) => void
}) => {
  const [formData, setFormData] = useState(initial)

  const formChange = (e: any) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setFormData((state) => ({ ...state, [name]: value }))
  }

  onInit && onInit()

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await onSubmit(formData, e)
    } catch (e: unknown) {
      onError && onError({ error: e, msg: '' })
      return
    }
  }

  return { formChange, formSubmit, formData }
}

export { form }
