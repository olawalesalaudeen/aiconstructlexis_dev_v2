# Speech understanding
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Linguistic comprehension  

## State of the Field

**Definition agreement:** Consensus. Most papers define speech understanding as a model's latent ability to comprehend the semantic content of spoken language or spoken audio, such as recognizing words, interpreting meaning, understanding context, following instructions, or answering questions. A few definitions add conditions or examples, and one broadens the scope to include paralinguistic information, but the dominant use is the same core phenomenon of understanding spoken language content.

**Space of definitions.** Across the surveyed work, the prevailing usage treats speech understanding as a latent model ability to interpret the semantic content of spoken language in audio: understanding words, phrases, context, and semantic meaning from speech, sometimes including following spoken instructions. One paper states that it focuses on "the interpretation of the semantic content within the audio," and another uses the closely aligned label linguistic comprehension for understanding spoken language well enough to answer questions correctly. A smaller line of work uses a broader scope, defining it as extracting both linguistic and paralinguistic information, including speaker attributes and acoustic features.

**Space of facets.** Papers organize the concept in a few different ways. One benchmark places speech understanding alongside audio scene understanding and voice understanding (paralinguistic), which treats paralinguistic content as separate, while another paper folds paralinguistic information into speech understanding itself. At the task level, papers connect it to speech recognition and spoken question answering, and some authors use the alternate label linguistic comprehension.

**Space of measurement.** Operationally, speech understanding is linked to 2 measurement instruments and 3 behavioral indicators. The most frequent instruments are AudioBench and SUPERB; AudioBench explicitly targets speech understanding, and SUPERB is described as focusing on it. Among behavioral indicators, speech recognition is the most common, with speech instruction following and spoken question answering also linked; one paper says it measured understanding ability for input speech by verifying ASR accuracy on different evaluation sets, and another evaluates ASR with WER on multilingual benchmarks, so the operationalization often centers on recognition and task performance even when definitions describe broader semantic or paralinguistic understanding.

**Links.** Beyond measurement, papers record only related links, not causal or correlational ones, and they do not link it to any other construct. One benchmark reports that speech recognition is related to speech understanding. The same source also reports that speech understanding is related to spoken question answering, and that speech instruction following is related to speech understanding.

## Sources

**[VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf)**
> The latent ability of a model to interpret the semantic content of spoken language in audio, including comprehension of words, phrases, and context across diverse conditions such as accents, noise, and length.

**[Understanding the Modality Gap: An Empirical Study on the Speech-Text Alignment Mechanism of Large Speech Language Models](https://aclanthology.org/2025.emnlp-main.262.pdf) (as "Linguistic comprehension")**
> The model’s ability to understand spoken language content well enough to answer questions correctly.

## Relationships

### Speech understanding →
- **Speech recognition** (behaviors tasks) — *causes*
  > “ASR and AST are foundational tasks that enable the model to understand speech”
  - [VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf)
- **AudioBench** (measurements) — *measured_by*
  > We introduce AudioBench, a universal benchmark designed to evaluate Audio Large Language Models (AudioLLMs). It encompasses 8 distinct tasks and 26 datasets... The evaluation targets three main aspects: speech understanding, audio scene understanding, and voice understanding (paralinguistic).
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
- **SUPERB** (measurements) — *measured_by*
  > SUPERB (Yang et al., 2021) focuses on speech understanding... (Section 5.1)
  - [Recent Advances in Speech Language Models: A Survey](https://aclanthology.org/2025.acl-long.682.pdf)

### Associated with
- **Spoken question answering** (behaviors tasks)
  > 3.3.1 Speech Understanding ... Speech Question Answering (SQA).
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
- **Speech instruction following** (behaviors tasks)
  > 3.3.1 Speech Understanding ... Speech Instruction (SI).
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
