import axios from "axios";
import { useEffect, useState } from "react";
export const api = axios.create({
  baseURL: "http://localhost:3500/",
});




