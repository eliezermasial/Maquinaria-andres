export type ActionResult<TData = null> =
  | {
      success: true;
      data: TData;
      message?: string;
    }
  | {
      success: false;
      error: string;
    };
