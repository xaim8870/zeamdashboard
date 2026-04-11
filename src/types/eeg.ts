export interface EEGChannelDto {
  name: string;
  index: number;
  enabled: boolean;
  region?: string;
  hemisphere?: string;
}

export interface WindowResultDto {
  window: {
    index: number;
    startTs: number;
    endTs: number;
  };
  sqi: {
    score01: number;
    rejected: boolean;
    reasons: string[];
  };
  features: null | {
    aggregate: {
      bandRelMean: {
        delta: number;
        theta: number;
        alpha: number;
        beta: number;
        gamma: number;
      };
      ratiosMean: {
        thetaBeta: number | null;
        alphaTheta: number | null;
        betaAlpha: number | null;
        thetaAlpha: number | null;
      };
    };
  };
  scores: null | {
    calm: number | null;
    focus: number | null;
    stress: number | null;
    confidence: number | null;
  };
}

export interface ProcessMentalabResponse {
  ok: boolean;
  patient: {
    patientName?: string;
    patientId?: string;
    age?: number | null;
    gender?: string | null;
    notes?: string | null;
  };
  upload: {
    exg: string;
    meta: string;
    marker?: string | null;
    orn?: string | null;
  };
  result: {
    version: {
      pipelineVersion: string;
      featureVersion: string;
      scoringVersion: string;
    };
    sessionId: string;
    device: string;
    samplingRate: number;
    channels: EEGChannelDto[];
    totalWindows: number;
    validWindows: number;
    invalidWindows: number;
    windowResults: WindowResultDto[];
    sessionScores: {
      calm: number | null;
      focus: number | null;
      stress: number | null;
      confidence: number | null;
    };
    qualitySummary: {
      meanSQI: number | null;
      validWindowFraction: number;
      badChannelsUnion: string[];
      warnings: string[];
    };
    metadata?: Record<string, unknown>;
  };
}