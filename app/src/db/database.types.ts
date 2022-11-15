export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      company: {
        Row: {
          name: string
          id: string
          created_at: string
        }
        Insert: {
          name: string
          id?: string
          created_at?: string
        }
        Update: {
          name?: string
          id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

