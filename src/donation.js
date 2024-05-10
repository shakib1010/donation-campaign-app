import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
import sortBy from 'sort-by'

export async function getDonations(query) {
  await fakeNetwork(`getDonations:${query}`)
  let donations = await localforage.getItem('donations')
  if (!donations) donations = []

  if (query) {
    donations = matchSorter(donations, query, { keys: ['id', 'category'] })
  }

  return donations.sort(sortBy('id', 'createdAt'))
}

export async function createDonation(data) {
  await fakeNetwork()
  let donation = { createdAt: Date.now(), ...data }
  let donations = await getDonations()
  if (donations.find((d) => d.id == donation.id)) return null
  donations.unshift(donation)
  await set(donations)
  return donation
}

export async function getDonation(id) {
  await fakeNetwork(`donation:${id}`)
  let donations = await localforage.getItem('donations')
  let donation = donations.find((donation) => donation.id === id)
  return donation ?? null
}

// export async function updateContact(id, updates) {
//   await fakeNetwork()
//   let contacts = await localforage.getItem('contacts')
//   let contact = contacts.find((contact) => contact.id === id)
//   if (!contact) throw new Error('No contact found for', id)
//   Object.assign(contact, updates)
//   await set(contacts)
//   return contact
// }

// export async function deleteContact(id) {
//   let contacts = await localforage.getItem('contacts')
//   let index = contacts.findIndex((contact) => contact.id === id)
//   if (index > -1) {
//     contacts.splice(index, 1)
//     await set(contacts)
//     return true
//   }
//   return false
// }

function set(donations) {
  return localforage.setItem('donations', donations)
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {}

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {}
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800)
  })
}
