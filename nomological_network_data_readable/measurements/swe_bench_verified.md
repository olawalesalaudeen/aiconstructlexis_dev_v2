# SWE-bench Verified
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** SWE-Bench Verified  

## State of the Field

**What it is.** Across the definitions, papers treat SWE-bench Verified as a benchmark dataset and a curated subset of SWE-Bench with 500 samples or instances. The prevailing description is that these cases were manually verified or further vetted by human annotators, in one definition specifically professional software developers, for appropriately scoped unit tests and well-specified issue descriptions; one snippet also says the released subset was verified to be non-problematic. One paper additionally describes it as containing 500 samples across 4 difficulty levels.

**What it is claimed to measure.** Papers use it to measure one behavioral indicator, software issue resolution, and one construct, general ability. The behavioral-indicator use is illustrated by work reporting an issue resolution rate on SWE-bench Verified, while another paper lists it among benchmarks relevant to today’s frontier models and thereby treats it as measuring general ability. The reported measurement claims cover only these two targets.

**Space of uses.** In the available descriptions, papers position SWE-bench Verified as a benchmark for automatically resolving software engineering issues, and one paper explicitly calls it the most popular benchmark for automatically resolving SWE issues. Papers also use it as an evaluation benchmark for reporting issue resolution rate. No other measurement instrument is linked to it.

**Concerns raised.** The closest discussion related to concerns is that one paper says it was introduced to improve the robustness and reliability of the evaluation. Papers also describe the 500-instance subset as further vetted by human annotators and verified to be non-problematic.

## Sources

**[UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench](https://aclanthology.org/2025.acl-long.189.pdf) (as "SWE-Bench Verified")**
> A curated subset of 500 SWE-Bench samples that were manually verified by professional software developers to have appropriately scoped unit tests and well-specified issue descriptions.

**[Otter: Generating Tests from Issues to Validate SWE Patches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ahmed25b/ahmed25b.pdf)**
> A benchmark dataset for automatically resolving software engineering issues, consisting of 500 instances vetted by human annotators.

## Relationships

### → SWE-bench Verified
- **Software issue resolution** (behaviors tasks) — *measured_by*
  > NEMOTRON-CORTEXA achieves an issue resolution rate of 42.00% on the SWE-bench Lite and 52.60% on SWE-bench Verified, while costing only $0.51 per instance. (Section 1)
  - [Nemotron-CORTEXA: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sohrabizadeh25a/sohrabizadeh25a.pdf)
