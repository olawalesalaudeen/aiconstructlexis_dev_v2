# LibriSpeech
**Type:** Measurement  
**Referenced in:** 24 papers  
**Also known as:** Librispeech  

## State of the Field

**What it is.** Most papers describe LibriSpeech as a large corpus, dataset, or benchmark of read English speech derived from audiobooks, often aligned and segmented, and commonly framed as clean read speech for ASR. Definitions usually mention 960 hours of English reading audio, though one paper says it contains roughly 1000 hours and another extracts chunks from it to form a 1GB audio dataset for compression experiments. Papers use several subsets and settings, including train-clean-100, dev-clean, dev-other, test-clean, test-other, and 100-hour and 960-hour setups, while a smaller line simply describes Librispeech as a speech recognition dataset for closed-ended audio evaluation.

**What it is claimed to measure.** Across papers, LibriSpeech is linked to 1 construct and 2 behavioral indicators. The prevailing use is to measure Speech recognition: relationship evidence calls it an automatic speech recognition benchmark, a benchmark dataset of clean read speech for standard ASR tasks, and a test set that demonstrates ASR performance in a clean scenario. A smaller line uses it to measure Speech reconstruction, and one paper uses it to measure Utility preservation as part of a general utility evaluation built around standard ASR tasks.

**Space of uses.** No measurement instrument is linked to it directly. Papers most often position LibriSpeech as an ASR benchmark, but they also use it for pre-training, tokenizer training, mutual information estimation, phoneme recognition, reconstruction, and perplexity evaluation on speech-text sequences. It also appears alongside other benchmarks such as GigaSpeech, AMI, AIR-Bench, AudioCaps, and CHiME-4, and one paper pairs it with MELD in a broader utility evaluation.

## Sources

**[Language Modeling Is Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/3cbf627fa24fb6cb576e04e689b9428b-Paper-Conference.pdf)**
> A large corpus of read English speech, from which chunks are extracted to create a 1GB audio dataset for compression experiments.

**[Aligned Better, Listen Better for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c79d6ed1788653643a1ac67b6ea32a7-Paper-Conference.pdf) (as "Librispeech")**
> A speech recognition dataset used for closed-ended audio evaluation.

## Relationships

### → LibriSpeech
- **Speech recognition** (behaviors tasks) — *measured_by*
  > ASR | LibriSpeech test-clean/-other, GigaSpeech test | %WER (Table 2)
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **Speech reconstruction** (behaviors tasks) — *measured_by*
  > We randomly sample 300 speech samples from LibriSpeech test set for speech reconstruction evaluation. (Section 4.2)
  - [SpeechTokenizer: Unified Speech Tokenizer for Speech Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/86d1ab582afb247ccaa84bec4a7e24f7-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > For general utility evaluation, we use AIR-Bench Chat..., LibriSpeech (Panayotov et al., 2015), a benchmark dataset of clean read speech for standard ASR tasks, and MELD... (Section 8.1)
  - [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf)
