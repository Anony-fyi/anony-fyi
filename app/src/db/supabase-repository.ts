import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'
import { Repository } from './repository.types'
import { env } from '../env/server.mjs'


const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)


export default (): Repository => ({

  getCompanies: async function() {
    const { data, error } = await supabase.from('company').select()
    return error ? [] : data
  }

})